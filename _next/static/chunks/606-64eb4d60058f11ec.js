"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{7283:function(e,t,n){n.d(t,{Ps:function(){return H}});var i=n(655);function s(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const r=/\r\n|[\n\r]/g;function o(e,t){let n=0,i=1;for(const o of e.body.matchAll(r)){if("number"===typeof o.index||s(!1),o.index>=t)break;n=o.index+o[0].length,i+=1}return{line:i,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,s=t.line-1,r=e.locationOffset.line-1,o=t.line+r,a=1===t.line?n:0,h=t.column+a,u=`${e.name}:${o}:${h}\n`,l=i.split(/\r\n|[\n\r]/g),p=l[s];if(p.length>120){const e=Math.floor(h/80),t=h%80,n=[];for(let i=0;i<p.length;i+=80)n.push(p.slice(i,i+80));return u+c([[`${o} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return u+c([[o-1+" |",l[s-1]],[`${o} |`,p],["|","^".padStart(h)],[`${o+1} |`,l[s+1]]])}function c(e){const t=e.filter((([e,t])=>void 0!==t)),n=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(n)+(t?" "+t:""))).join("\n")}class h extends Error{constructor(e,...t){var n,i,s;const{nodes:r,source:a,positions:c,path:l,originalError:p,extensions:d}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!==l&&void 0!==l?l:void 0,this.originalError=null!==p&&void 0!==p?p:void 0,this.nodes=u(Array.isArray(r)?r:r?[r]:void 0);const f=u(null===(n=this.nodes)||void 0===n?void 0:n.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!==a&&void 0!==a?a:null===f||void 0===f||null===(i=f[0])||void 0===i?void 0:i.source,this.positions=null!==c&&void 0!==c?c:null===f||void 0===f?void 0:f.map((e=>e.start)),this.locations=c&&a?c.map((e=>o(a,e))):null===f||void 0===f?void 0:f.map((e=>o(e.source,e.start)));const E="object"==typeof(v=null===p||void 0===p?void 0:p.extensions)&&null!==v?null===p||void 0===p?void 0:p.extensions:void 0;var v;this.extensions=null!==(s=null!==d&&void 0!==d?d:E)&&void 0!==s?s:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!==p&&void 0!==p&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+a(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function u(e){return void 0===e||0===e.length?void 0:e}function l(e,t,n){return new h(`Syntax Error: ${n}`,{source:e,positions:[t]})}var p=n(2380);let d;!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(d||(d={}));var f=n(7359),E=n(7392),v=n(8297);let y;!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(y||(y={}));class m{constructor(e){const t=new p.WU(y.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==y.EOF)do{if(e.next)e=e.next;else{const t=A(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===y.COMMENT);return e}}function k(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function N(e,t){return T(e.charCodeAt(t))&&_(e.charCodeAt(t+1))}function T(e){return e>=55296&&e<=56319}function _(e){return e>=56320&&e<=57343}function O(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return y.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function x(e,t,n,i,s){const r=e.line,o=1+n-e.lineStart;return new p.WU(t,n,i,r,o,s)}function A(e,t){const n=e.source.body,i=n.length;let s=t;for(;s<i;){const t=n.charCodeAt(s);switch(t){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++e.line,e.lineStart=s;continue;case 13:10===n.charCodeAt(s+1)?s+=2:++s,++e.line,e.lineStart=s;continue;case 35:return I(e,s);case 33:return x(e,y.BANG,s,s+1);case 36:return x(e,y.DOLLAR,s,s+1);case 38:return x(e,y.AMP,s,s+1);case 40:return x(e,y.PAREN_L,s,s+1);case 41:return x(e,y.PAREN_R,s,s+1);case 46:if(46===n.charCodeAt(s+1)&&46===n.charCodeAt(s+2))return x(e,y.SPREAD,s,s+3);break;case 58:return x(e,y.COLON,s,s+1);case 61:return x(e,y.EQUALS,s,s+1);case 64:return x(e,y.AT,s,s+1);case 91:return x(e,y.BRACKET_L,s,s+1);case 93:return x(e,y.BRACKET_R,s,s+1);case 123:return x(e,y.BRACE_L,s,s+1);case 124:return x(e,y.PIPE,s,s+1);case 125:return x(e,y.BRACE_R,s,s+1);case 34:return 34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)?P(e,s):D(e,s)}if((0,v.X1)(t)||45===t)return g(e,s,t);if((0,v.LQ)(t))return F(e,s);throw l(e.source,s,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":k(t)||N(n,s)?`Unexpected character: ${O(e,s)}.`:`Invalid character: ${O(e,s)}.`)}return x(e,y.EOF,i,i)}function I(e,t){const n=e.source.body,i=n.length;let s=t+1;for(;s<i;){const e=n.charCodeAt(s);if(10===e||13===e)break;if(k(e))++s;else{if(!N(n,s))break;s+=2}}return x(e,y.COMMENT,t,s,n.slice(t+1,s))}function g(e,t,n){const i=e.source.body;let s=t,r=n,o=!1;if(45===r&&(r=i.charCodeAt(++s)),48===r){if(r=i.charCodeAt(++s),(0,v.X1)(r))throw l(e.source,s,`Invalid number, unexpected digit after 0: ${O(e,s)}.`)}else s=b(e,s,r),r=i.charCodeAt(s);if(46===r&&(o=!0,r=i.charCodeAt(++s),s=b(e,s,r),r=i.charCodeAt(s)),69!==r&&101!==r||(o=!0,r=i.charCodeAt(++s),43!==r&&45!==r||(r=i.charCodeAt(++s)),s=b(e,s,r),r=i.charCodeAt(s)),46===r||(0,v.LQ)(r))throw l(e.source,s,`Invalid number, expected digit but got: ${O(e,s)}.`);return x(e,o?y.FLOAT:y.INT,t,s,i.slice(t,s))}function b(e,t,n){if(!(0,v.X1)(n))throw l(e.source,t,`Invalid number, expected digit but got: ${O(e,t)}.`);const i=e.source.body;let s=t+1;for(;(0,v.X1)(i.charCodeAt(s));)++s;return s}function D(e,t){const n=e.source.body,i=n.length;let s=t+1,r=s,o="";for(;s<i;){const i=n.charCodeAt(s);if(34===i)return o+=n.slice(r,s),x(e,y.STRING,t,s+1,o);if(92!==i){if(10===i||13===i)break;if(k(i))++s;else{if(!N(n,s))throw l(e.source,s,`Invalid character within String: ${O(e,s)}.`);s+=2}}else{o+=n.slice(r,s);const t=117===n.charCodeAt(s+1)?123===n.charCodeAt(s+2)?C(e,s):R(e,s):L(e,s);o+=t.value,s+=t.size,r=s}}throw l(e.source,s,"Unterminated string.")}function C(e,t){const n=e.source.body;let i=0,s=3;for(;s<12;){const e=n.charCodeAt(t+s++);if(125===e){if(s<5||!k(i))break;return{value:String.fromCodePoint(i),size:s}}if(i=i<<4|w(e),i<0)break}throw l(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+s)}".`)}function R(e,t){const n=e.source.body,i=S(n,t+2);if(k(i))return{value:String.fromCodePoint(i),size:6};if(T(i)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=S(n,t+8);if(_(e))return{value:String.fromCodePoint(i,e),size:12}}throw l(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function S(e,t){return w(e.charCodeAt(t))<<12|w(e.charCodeAt(t+1))<<8|w(e.charCodeAt(t+2))<<4|w(e.charCodeAt(t+3))}function w(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function L(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw l(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function P(e,t){const n=e.source.body,i=n.length;let s=e.lineStart,r=t+3,o=r,a="";const c=[];for(;r<i;){const i=n.charCodeAt(r);if(34===i&&34===n.charCodeAt(r+1)&&34===n.charCodeAt(r+2)){a+=n.slice(o,r),c.push(a);const i=x(e,y.BLOCK_STRING,t,r+3,(0,E.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=s,i}if(92!==i||34!==n.charCodeAt(r+1)||34!==n.charCodeAt(r+2)||34!==n.charCodeAt(r+3))if(10!==i&&13!==i)if(k(i))++r;else{if(!N(n,r))throw l(e.source,r,`Invalid character within String: ${O(e,r)}.`);r+=2}else a+=n.slice(o,r),c.push(a),13===i&&10===n.charCodeAt(r+1)?r+=2:++r,a="",o=r,s=r;else a+=n.slice(o,r),o=r+1,r+=4}throw l(e.source,r,"Unterminated string.")}function F(e,t){const n=e.source.body,i=n.length;let s=t+1;for(;s<i;){const e=n.charCodeAt(s);if(!(0,v.HQ)(e))break;++s}return x(e,y.NAME,t,s,n.slice(t,s))}var M=n(1270);class U{constructor(e,t){const n=(0,M.T)(e)?e:new M.H(e);this._lexer=new m(n),this._options=t}parseName(){const e=this.expectToken(y.NAME);return this.node(e,{kind:f.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:f.h.DOCUMENT,definitions:this.many(y.SOF,this.parseDefinition,y.EOF)})}parseDefinition(){if(this.peek(y.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===y.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw l(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(y.BRACE_L))return this.node(e,{kind:f.h.OPERATION_DEFINITION,operation:p.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(y.NAME)&&(n=this.parseName()),this.node(e,{kind:f.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(y.NAME);switch(e.value){case"query":return p.ku.QUERY;case"mutation":return p.ku.MUTATION;case"subscription":return p.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(y.PAREN_L,this.parseVariableDefinition,y.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:f.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(y.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(y.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(y.DOLLAR),this.node(e,{kind:f.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:f.h.SELECTION_SET,selections:this.many(y.BRACE_L,this.parseSelection,y.BRACE_R)})}parseSelection(){return this.peek(y.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,i;return this.expectOptionalToken(y.COLON)?(n=t,i=this.parseName()):i=t,this.node(e,{kind:f.h.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(y.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(y.PAREN_L,t,y.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,n=this.parseName();return this.expectToken(y.COLON),this.node(t,{kind:f.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(y.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(y.NAME)?this.node(e,{kind:f.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:f.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var e;const t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacyFragmentVariables)?this.node(t,{kind:f.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:f.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case y.BRACKET_L:return this.parseList(e);case y.BRACE_L:return this.parseObject(e);case y.INT:return this._lexer.advance(),this.node(t,{kind:f.h.INT,value:t.value});case y.FLOAT:return this._lexer.advance(),this.node(t,{kind:f.h.FLOAT,value:t.value});case y.STRING:case y.BLOCK_STRING:return this.parseStringLiteral();case y.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:f.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:f.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:f.h.NULL});default:return this.node(t,{kind:f.h.ENUM,value:t.value})}case y.DOLLAR:if(e){if(this.expectToken(y.DOLLAR),this._lexer.token.kind===y.NAME){const e=this._lexer.token.value;throw l(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:f.h.STRING,value:e.value,block:e.kind===y.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:f.h.LIST,values:this.any(y.BRACKET_L,(()=>this.parseValueLiteral(e)),y.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:f.h.OBJECT,fields:this.any(y.BRACE_L,(()=>this.parseObjectField(e)),y.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(y.COLON),this.node(t,{kind:f.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(y.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(y.AT),this.node(t,{kind:f.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(y.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(y.BRACKET_R),t=this.node(e,{kind:f.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(y.BANG)?this.node(e,{kind:f.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:f.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(y.STRING)||this.peek(y.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(y.BRACE_L,this.parseOperationTypeDefinition,y.BRACE_R);return this.node(e,{kind:f.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(y.COLON);const n=this.parseNamedType();return this.node(e,{kind:f.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:f.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();return this.node(e,{kind:f.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:s,fields:r})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(y.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(y.BRACE_L,this.parseFieldDefinition,y.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(y.COLON);const s=this.parseTypeReference(),r=this.parseConstDirectives();return this.node(e,{kind:f.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:s,directives:r})}parseArgumentDefs(){return this.optionalMany(y.PAREN_L,this.parseInputValueDef,y.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(y.COLON);const i=this.parseTypeReference();let s;this.expectOptionalToken(y.EQUALS)&&(s=this.parseConstValueLiteral());const r=this.parseConstDirectives();return this.node(e,{kind:f.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:s,directives:r})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();return this.node(e,{kind:f.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:s,fields:r})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseUnionMemberTypes();return this.node(e,{kind:f.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:s})}parseUnionMemberTypes(){return this.expectOptionalToken(y.EQUALS)?this.delimitedMany(y.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();return this.node(e,{kind:f.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:s})}parseEnumValuesDefinition(){return this.optionalMany(y.BRACE_L,this.parseEnumValueDefinition,y.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:f.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw l(this._lexer.source,this._lexer.token.start,`${B(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();return this.node(e,{kind:f.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:s})}parseInputFieldsDefinition(){return this.optionalMany(y.BRACE_L,this.parseInputValueDef,y.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===y.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(y.BRACE_L,this.parseOperationTypeDefinition,y.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:f.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:f.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===s.length)throw this.unexpected();return this.node(e,{kind:f.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:s})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===s.length)throw this.unexpected();return this.node(e,{kind:f.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:s})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:f.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(y.AT);const n=this.parseName(),i=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const r=this.parseDirectiveLocations();return this.node(e,{kind:f.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:s,locations:r})}parseDirectiveLocations(){return this.delimitedMany(y.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(d,t.value))return t;throw this.unexpected(e)}node(e,t){var n;return!0!==(null===(n=this._options)||void 0===n?void 0:n.noLocation)&&(t.loc=new p.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw l(this._lexer.source,t.start,`Expected ${V(e)}, found ${B(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this._lexer.advance(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==y.NAME||t.value!==e)throw l(this._lexer.source,t.start,`Expected "${e}", found ${B(t)}.`);this._lexer.advance()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===y.NAME&&t.value===e&&(this._lexer.advance(),!0)}unexpected(e){const t=null!==e&&void 0!==e?e:this._lexer.token;return l(this._lexer.source,t.start,`Unexpected ${B(t)}.`)}any(e,t,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(t.call(this));return i}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}}function B(e){const t=e.value;return V(e.kind)+(null!=t?` "${t}"`:"")}function V(e){return function(e){return e===y.BANG||e===y.DOLLAR||e===y.AMP||e===y.PAREN_L||e===y.PAREN_R||e===y.SPREAD||e===y.COLON||e===y.EQUALS||e===y.AT||e===y.BRACKET_L||e===y.BRACKET_R||e===y.BRACE_L||e===y.PIPE||e===y.BRACE_R}(e)?`"${e}"`:e}var K=new Map,Q=new Map,G=!0,j=!1;function q(e){return e.replace(/[\s,]+/g," ").trim()}function $(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,s=q((o=e.loc).source.body.substring(o.start,o.end)),r=Q.get(i);r&&!r.has(s)?G&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):r||Q.set(i,r=new Set),r.add(s),t.has(s)||(t.add(s),n.push(e))}else n.push(e);var o})),(0,i.pi)((0,i.pi)({},e),{definitions:n})}function Y(e){var t=q(e);if(!K.has(t)){var n=function(e,t){return new U(e,t).parseDocument()}(e,{experimentalFragmentVariables:j,allowLegacyFragmentVariables:j});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");K.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"===typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}($(n)))}return K.get(t)}function H(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"===typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),Y(i)}var J,z=H,X=function(){K.clear(),Q.clear()},W=function(){G=!1},Z=function(){j=!0},ee=function(){j=!1};(J=H||(H={})).gql=z,J.resetCaches=X,J.disableFragmentWarnings=W,J.enableExperimentalFragmentVariables=Z,J.disableExperimentalFragmentVariables=ee,H.default=H},5850:function(e,t,n){n.d(t,{a:function(){return O}});var i=n(655),s=n(3917),r=n(7294),o=n.t(r,2),a=n(320),c=!1,h=o.useSyncExternalStore||function(e,t,n){var i=t();__DEV__&&!c&&i!==t()&&(c=!0,__DEV__&&s.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var o=r.useState({inst:{value:i,getSnapshot:t}}),h=o[0].inst,l=o[1];return a.JC?r.useLayoutEffect((function(){Object.assign(h,{value:i,getSnapshot:t}),u(h)&&l({inst:h})}),[e,i,t]):Object.assign(h,{value:i,getSnapshot:t}),r.useEffect((function(){return u(h)&&l({inst:h}),e((function(){u(h)&&l({inst:h})}))}),[e]),i};function u(e){var t=e.value,n=e.getSnapshot;try{return t!==n()}catch(i){return!0}}var l,p=n(2152),d=n(4012),f=n(5317),E=n(990),v=n(1644);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(l||(l={}));var y=new Map;function m(e){var t;switch(e){case l.Query:t="Query";break;case l.Mutation:t="Mutation";break;case l.Subscription:t="Subscription"}return t}function k(e,t){var n=function(e){var t,n,i=y.get(e);if(i)return i;__DEV__?(0,s.kG)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,s.kG)(!!e&&!!e.kind,30);for(var r=[],o=[],a=[],c=[],h=0,u=e.definitions;h<u.length;h++){var p=u[h];if("FragmentDefinition"!==p.kind){if("OperationDefinition"===p.kind)switch(p.operation){case"query":o.push(p);break;case"mutation":a.push(p);break;case"subscription":c.push(p)}}else r.push(p)}__DEV__?(0,s.kG)(!r.length||o.length||a.length||c.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,s.kG)(!r.length||o.length||a.length||c.length,31),__DEV__?(0,s.kG)(o.length+a.length+c.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(c.length," ")+"subscriptions and ".concat(a.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,s.kG)(o.length+a.length+c.length<=1,32),n=o.length?l.Query:l.Mutation,o.length||a.length||(n=l.Subscription);var d=o.length?o:a.length?a:c;__DEV__?(0,s.kG)(1===d.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(d.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,s.kG)(1===d.length,33);var f=d[0];t=f.variableDefinitions||[];var E={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:n,variables:t};return y.set(e,E),E}(e),i=m(t),r=m(n.type);__DEV__?(0,s.kG)(n.type===t,"Running a ".concat(i," requires a graphql ")+"".concat(i,", but a ").concat(r," was used instead.")):(0,s.kG)(n.type===t,34)}var N=n(8702),T=n(2651),_=Object.prototype.hasOwnProperty;function O(e,t){return void 0===t&&(t=Object.create(null)),function(e,t){var n=(0,r.useRef)();n.current&&e===n.current.client&&t===n.current.query||(n.current=new x(e,t,n.current));var i=n.current,s=(0,r.useState)(0),o=(s[0],s[1]);return i.forceUpdate=function(){o((function(e){return e+1}))},i}(function(e){var t=(0,r.useContext)((0,f.K)()),n=e||t.client;return __DEV__?(0,s.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,s.kG)(!!n,29),n}(t.client),e).useQuery(t)}var x=function(){function e(e,t,n){this.client=e,this.query=t,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,N.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,N.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),k(t,l.Query);var i=n&&n.result,s=i&&i.data;s&&(this.previousData=s)}return e.prototype.forceUpdate=function(){__DEV__&&s.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.asyncUpdate=function(){var e=this;return new Promise((function(t){e.asyncResolveFns.add(t),e.optionsToIgnoreOnce.add(e.watchQueryOptions),e.forceUpdate()}))},e.prototype.useQuery=function(e){var t=this;this.renderPromises=(0,r.useContext)((0,f.K)()).renderPromises,this.useOptions(e);var n=this.useObservableQuery(),i=h((0,r.useCallback)((function(){if(t.renderPromises)return function(){};var e=function(){var e=t.result,i=n.getCurrentResult();e&&e.loading===i.loading&&e.networkStatus===i.networkStatus&&(0,p.D)(e.data,i.data)||t.setResult(i)},i=function(r){var o=n.last;s.unsubscribe();try{n.resetLastResults(),s=n.subscribe(e,i)}finally{n.last=o}if(!_.call(r,"graphQLErrors"))throw r;var a=t.result;(!a||a&&a.loading||!(0,p.D)(r,a.error))&&t.setResult({data:a&&a.data,error:r,loading:!1,networkStatus:v.I.error})},s=n.subscribe(e,i);return function(){return s.unsubscribe()}}),[n,this.renderPromises,this.client.disableNetworkFetches]),(function(){return t.getCurrentResult()}),(function(){return t.getCurrentResult()}));this.unsafeHandlePartialRefetch(i);var s=this.toQueryResult(i);return!s.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(e){return e(s)})),this.asyncResolveFns.clear()),s},e.prototype.useOptions=function(t){var n,i=this.createWatchQueryOptions(this.queryHookOptions=t),s=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(s)&&(0,p.D)(i,s)||(this.watchQueryOptions=i,s&&this.observable&&(this.optionsToIgnoreOnce.delete(s),this.observable.reobserve(i),this.previousData=(null===(n=this.result)||void 0===n?void 0:n.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},e.prototype.createWatchQueryOptions=function(e){var t;void 0===e&&(e={});var n=e.skip,s=(e.ssr,e.onCompleted,e.onError,e.displayName,e.defaultOptions,(0,i._T)(e,["skip","ssr","onCompleted","onError","displayName","defaultOptions"])),r=Object.assign(s,{query:this.query});if(!this.renderPromises||"network-only"!==r.fetchPolicy&&"cache-and-network"!==r.fetchPolicy||(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),n){var o=r.fetchPolicy,a=void 0===o?this.getDefaultFetchPolicy():o,c=r.initialFetchPolicy,h=void 0===c?a:c;Object.assign(r,{initialFetchPolicy:h,fetchPolicy:"standby"})}else r.fetchPolicy||(r.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return r},e.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(e){},e.prototype.onError=function(e){},e.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery((0,d.J)(this.queryHookOptions.defaultOptions,this.watchQueryOptions));this.obsQueryFields=(0,r.useMemo)((function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}),[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},e.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e)},e.prototype.handleErrorOrCompleted=function(e){e.loading||(e.error?this.onError(e.error):e.data&&this.onCompleted(e.data))},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var n=e.data,s=(e.partial,(0,i._T)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,i.pi)((0,i.pi)((0,i.pi)({data:n},s),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!0,previousData:this.previousData})),!t.error&&(0,T.O)(e.errors)&&(t.error=new E.c({graphQLErrors:e.errors})),t},e.prototype.unsafeHandlePartialRefetch=function(e){!e.partial||!this.queryHookOptions.partialRefetch||e.loading||e.data&&0!==Object.keys(e.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(e,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},e}()}}]);