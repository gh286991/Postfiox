import React from 'react';
import { toPostfix, postfixCal } from '../tools/trsPostfix';

const container = {
  marginTop: '40px',
};

class Postfix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTexT: null,
      postfix: null,
      number: null,
    };
  }

  inputChange = (e) => {
    const { value } = e.target;
    const formula = value.split('');
    this.setState({
      inputTexT: formula,
    });
  }

  transPost = () => {
    const { inputTexT } = this.state;
    const postfix = toPostfix(inputTexT);
    const number = postfixCal(postfix);

    this.setState({
      postfix: postfix.join(''),
      number,
    });
  }


  render() {
    const { postfix, number } = this.state;
    return (
      <div style={container}>
        <div>
                輸入算式
        </div>
        <input onChange={this.inputChange} />
        <div>
          <button type="button" onClick={this.transPost}> 轉換</button>
        </div>
        <div>
            後序式：
          {' '}
          {postfix}
          {' '}
          <br />
            結果：
          {' '}
          {/* eslint-disable no-nested-ternary */}
          { Number.isNaN(number) ? number === null ? null : '輸入錯誤' : number}
        </div>

      </div>
    );
  }
}

export default Postfix;
