import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number } = this.state; //state조회할때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다");
              }
            );

            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });

            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 함
            // 이 코드는 함수에서 바로 객체를 반환한다는 의미
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
