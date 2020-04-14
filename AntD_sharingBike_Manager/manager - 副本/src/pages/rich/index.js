import React from 'react'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html';

export default class Rich extends React.Component {
    state = {
        showRichText: false,
        editorState: ''
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleClearContent = () => {
        this.setState({
            editorState: ''
        })
    }

    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }

    onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
    };
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Card >
                    <Button type="primary" style={{ marginRight: 10 }} onClick={this.handleClearContent}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText}>获取HTML内容</Button>
                </Card>
                        
                <Card title="富文本编辑器" style={{height:300}} >
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                    />
                </Card>
                <Modal
                    visible={this.state.showRichText}
                    onCancel={() => {
                        this.setState({ showRichText: false })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        )
    }
}