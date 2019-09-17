(window["webpackJsonprpn-calculator"]=window["webpackJsonprpn-calculator"]||[]).push([[0],{10:function(e,t,a){e.exports=a(11)},11:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(1),i=a(3),l=a(4),r=a(8),s=a(5),o=a(9),d=a(0),u=a.n(d),m=a(6),h=a.n(m),p=(a(16),"."),k="-",b=5,f="0",v=[f],E=Array(b-1).fill("\xa0"),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).getDisplayRows=function(){return[].concat(Object(c.a)(a.state.stack),Object(c.a)(E)).slice(0,b).reverse()},a.handleRoll=function(){a.setState({stack:[].concat(Object(c.a)(a.state.stack.slice(1)),[a.state.stack[0]])})},a.handleDivision=function(){return a.handleArithmetic((function(e,t){return e/t}))},a.handleMultiplication=function(){return a.handleArithmetic((function(e,t){return e*t}))},a.handleSubtraction=function(){return a.handleArithmetic((function(e,t){return e-t}))},a.handleAddition=function(){return a.handleArithmetic((function(e,t){return e+t}))},a.digitHandler=function(e){return function(){a.updateDisplay((function(t){return t!==f?"".concat(t).concat(e):e}))}},a.handleDecimal=function(){a.updateDisplay((function(e){return-1===e.indexOf(p)?"".concat(e).concat(p):e}))},a.handleArithmetic=function(e){if(a.state.stack.length<2)console.log("You need at least 2 numbers on the stack to perform arithmetic.");else{var t=a.state.stack.slice(0,2),i=Object(n.a)(t,2),l=i[0],r=i[1],s=e(Number.parseFloat(r),Number.parseFloat(l));a.setState({stack:[s].concat(Object(c.a)(a.state.stack.slice(2)))})}},a.handleSign=function(){a.updateDisplay((function(e){return-1===e.indexOf(k)?"".concat(k).concat(e):e.substr(1)}))},a.handleClear=function(){a.setState({stack:v})},a.handleDrop=function(){if(1===a.state.stack.length)return a.handleClear();a.setState({stack:a.state.stack.slice(1)})},a.handleDelete=function(){a.updateDisplay((function(e){return e.length>1?e.slice(0,-1):f}))},a.handleEnter=function(){a.setState({stack:[f].concat(Object(c.a)(a.state.stack))})},a.updateDisplay=function(e){a.setState((function(t){return{stack:t.stack.map((function(t,a){return 0===a?e(t):t}))}}))},a.state={stack:v},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"calculator"},u.a.createElement("div",{className:"display"},this.getDisplayRows().map((function(e,t){return u.a.createElement("div",{key:t,className:"display_row"},e)}))),u.a.createElement("div",{className:"btn operator",onClick:this.handleRoll},"Roll"),u.a.createElement("div",{className:"btn operator",onClick:this.handleUndo},"Undo"),u.a.createElement("div",{className:"btn operator",onClick:this.handleRedo},"Redo"),u.a.createElement("div",{className:"btn operator",onClick:this.handleSign},"+/-"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDivision},"/"),u.a.createElement("div",{className:"btn operator",onClick:this.handleSwap},"Swap"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("7")},"7"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("8")},"8"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("9")},"9"),u.a.createElement("div",{className:"btn operator",onClick:this.handleMultiplication},"*"),u.a.createElement("div",{className:"btn operator",onClick:this.handleClear},"Clear"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("4")},"4"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("5")},"5"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("6")},"6"),u.a.createElement("div",{className:"btn operator",onClick:this.handleSubtraction},"-"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDrop},"Drop"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("1")},"1"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("2")},"2"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("3")},"3"),u.a.createElement("div",{className:"btn operator",onClick:this.handleAddition},"+"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDelete},"Del"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDecimal},p),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("0")},"0"),u.a.createElement("div",{className:"btn operator enter",onClick:this.handleEnter},"Enter"))}}]),t}(u.a.Component);h.a.render(u.a.createElement(C,null),document.getElementById("root"))},16:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.b7d606c3.chunk.js.map