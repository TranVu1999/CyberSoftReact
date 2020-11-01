import React, { Component } from 'react';

class Index extends Component {
    username = 'Tran Vu';
    isLogin = false; // Chưa login

    handleLogin = () =>{
        this.isLogin = true;
    }

    renderHTML = () => {
        return (
            // Thẻ ảo, khi ra ngoài thì thẻ này không được hiển thị trên giao diện
            <>
                {this.isLogin ? 
                    (<p>Hello {this.username}</p>) : 
                    (
                        <button
                            className="btn btn-success"
                            onClick = {this.handleLogin}
                        >Login</button>
                    )}
                
            </>
        );
    }

    render() {
        return (
            <div className="mt-5 px-5">
                <h3>Handle Event Example</h3>
                {this.renderHTML()}

            </div>
        );
    }
}

export default Index;