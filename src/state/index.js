import React, { Component } from 'react';

class Index extends Component {
    constructor(props){
        // Hàm khởi tạo chỉ chạy được 1 lần
        super(props);
        this.state = {
            username: "Tran Vu",
            isLogin: false
        }
        this.handleLogin = this.handleLogin.bind(this);

    }

    // handleLogin = () => {
    //     // Khi state được cập nhật thì hàm render() sẽ được gọi lại
    //     // Hàm setState là làm bất đồng bộ
    //     // this.setState({isLogin: true})
    //     // console.log(this.state.isLogin) // false

    //     this.setState({isLogin: true}, () =>{
    //         console.log(this.state.isLogin) // true
    //     });
    // }

    handleLogin() {
        // Lúc này nó không hiểu từ khóa this
        this.setState({isLogin: true});
    }

    renderHTML = () => {
        return (
            // Thẻ ảo, khi ra ngoài thì thẻ này không được hiển thị trên giao diện
            <>
                {this.state.isLogin ?
                    (<p>Hello {this.state.username}</p>) :
                    (
                        <button
                            className="btn btn-success"
                            onClick={this.handleLogin}
                        >Login</button>
                    )}

            </>
        );
    }

    render() {
        return (
            <div className="mt-5 px-5">
                <h3>State Example</h3>
                {this.renderHTML()}

            </div>
        );
    }
}

export default Index;