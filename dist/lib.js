import React,{forwardRef,createElement,Fragment}from"react";import{oneOf,bool,string}from"prop-types";const composer=(...a)=>a.filter(Boolean).map(a=>({[String.toString()]:()=>a,[Number.toString()]:()=>a,[Array.toString()]:()=>composer(...a),[Object.toString()]:()=>composer(Object.keys(a).filter(b=>a[b]))})[a.constructor.toString()]).map(a=>a()).flat().join(" ").trim();var useTooltip=(a,b="")=>({className:composer(b,"tooltip"),"data-tooltip":a}),useBadge=(a,b="")=>({className:composer(b,"badge"),"data-badge":a}),index=/*#__PURE__*/Object.freeze({useTooltip:useTooltip,useBadge:useBadge,useClassName:composer});const proxy=(a,b,c)=>a(new Proxy(b,{get(a,b,d){return c.push(b),Reflect.get(a,b,d)}})),factory=({type:a,className:b,style:c,rewire:d=a=>a||{},wrap:e=a=>a})=>forwardRef((f,g)=>{const h=[];let{className:i,children:j}=f;const k=c&&proxy(c,f,h),l=d&&proxy(d,f,h);i=composer(b,k,i),j=e(j,f);const m=h.reduce((a,b)=>(a[b]=void 0)||a,{});return f={...l,children:j,...m,ref:g,className:i},createElement(a,f)}),oneOfOption=a=>oneOf(Object.keys(a).map(b=>a[b])),Icon=factory({type:"i",className:"icon",style:({size:a,type:b})=>({[`icon-${a}`]:a,[`icon-${b}`]:b})});Icon.Size={BIG:"2x",BIGGER:"3x",BIGGEST:"4x"},Icon.Type={ARROW_UP:"arrow-up",ARROW_RIGHT:"arrow-right",ARROW_DOWN:"arrow-down",ARROW_LEFT:"arrow-left",UPWARD:"upward",FORWARD:"forward",DOWNWARD:"downward",BACK:"back",CARET:"caret",MENU:"menu",APPS:"apps",MORE_HORIZ:"more-horiz",MORE_VERT:"more-vert",RESIZE_HORIZ:"resize-horiz",RESIZE_VERT:"resize-vert",PLUS:"plus",MINUS:"minus",CROSS:"cross",CHECK:"check",STOP:"stop",SHUTDOWN:"shutdown",REFRESH:"refresh",SEARCH:"search",FLAG:"flag",BOOKMARK:"bookmark",EDIT:"edit",DELETE:"delete",SHARE:"share",DOWNLOAD:"download",UPLOAD:"upload",MAIL:"mail",PEOPLE:"people",MESSAGE:"message",PHOTO:"photo",TIME:"time",LOCATION:"location",LINK:"link",EMOJI:"emoji"},Icon.propTypes={size:oneOfOption(Icon.Size),type:oneOfOption(Icon.Type).isRequired};const Accordion=factory({type:"div",className:"accordion",wrap:(a,{exclusive:b})=>{const c=composer({checkbox:!b,radio:b});return React.createElement(Fragment,null,React.createElement("input",{type:c,hidden:!0}),a)}});Accordion.propTypes={exclusive:bool};const Header=factory({type:"label",className:"accordion-header",wrap:(a,{caret:b})=>React.createElement(Fragment,null,b&&React.createElement(Icon,{type:Icon.Type.ARROW_RIGHT}),a)});Header.propTypes={caret:bool};const Body=factory({type:"div",className:"accordion-body"});Accordion.Header=Header,Accordion.Body=Body;const Avatar=factory({type:"figure",className:"avatar",style:({size:a})=>({[`avatar-${a}`]:a}),rewire:({initials:a})=>({"data-initial":a})});Avatar.Size={EXTRA_LARGE:"xl",LARGE:"lg",SMALL:"sm",EXTRA_SMALL:"xs"},Avatar.propTypes={size:oneOfOption(Avatar.Size),initials:string};const Presence=factory({type:"i",className:"avatar-presence",style:({presence:a})=>a});Presence.Presence={ONLINE:"online",BUSY:"busy",AWAY:"away",OFFLINE:"offline"},Presence.propTypes={presence:oneOfOption(Presence.Presence)},Avatar.Presence=Presence;const Breadcrumb=factory({type:"ul",className:"breadcrumb"}),Item=factory({type:"li",className:"breadcrumb-item"});Breadcrumb.Item=Item;const Button=factory({type:"button",className:"btn",style:({active:a,disabled:b,size:c,primary:d,success:e,error:f})=>({active:a,disabled:b,[`btn-${c}`]:c,"btn-primary":d,"btn-success":e,"btn-error":f})});Button.Size={LARGE:"lg",MEDIUM:null,SMALL:"sm"},Button.propTypes={active:bool,disabled:bool,primary:bool,success:bool,error:bool,size:oneOfOption(Button.Size)};const ButtonGroup=factory({type:"div",className:"btn-group",style:({block:a})=>({"btn-group-block":a})});ButtonGroup.propTypes={block:bool};const Card=factory({type:"div",className:"card"}),Image=factory({type:"div",className:"card-image"}),Header$1=factory({type:"div",className:"card-header"}),Title=factory({type:"div",className:"card-title"}),SubTitle=factory({type:"div",className:"card-subtitle"}),Body$1=factory({type:"div",className:"card-body"}),Footer=factory({type:"div",className:"card-footer"});Card.Image=Image,Card.Header=Header$1,Card.Title=Title,Card.SubTitle=SubTitle,Card.Body=Body$1,Card.Footer=Footer;const Chip=factory({type:"div",className:"chip",style:({size:a,active:b})=>({[`chip-${a}`]:a,active:b})});Chip.Size={SMALL:"sm"},Chip.propTypes={active:bool,size:oneOfOption(Chip.Size)};const Column=factory({type:"div",className:"column",style:({width:a,auto:b,breakpoint:c})=>({[`col-${a}`]:a&&!c,[`col-${c}-${a}`]:a&&c,[`col-${b}-auto`]:"string"==typeof b,"col-auto":!0===b})});Column.Width={ONE:"1",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",TEN:"10",ELEVEN:"11",TWELVE:"12"},Column.Breakpoint={EXTRA_LARGE:"xl",LARGE:"lg",MEDIUM:"md",SMALL:"sm",EXTRA_SMALL:"xs"},Column.Auto={EXTRA_LARGE:"xl",LARGE:"lg",MEDIUM:"md",SMALL:"sm",EXTRA_SMALL:"xs"},Column.propTypes={breakpoint:oneOfOption(Column.Breakpoint),width:oneOfOption(Column.Width),auto:oneOf([oneOfOption(Column.Auto),bool])};const Columns=factory({type:"div",className:"columns",style:({gapless:a,oneline:b})=>({"col-gapless":a,"col-oneline":b})});Columns.propTypes={gapless:bool,oneline:bool};const Container=factory({type:"div",className:"container",style:({size:a})=>({[`grid-${a}`]:a})});Container.Size={EXTRA_LARGE:"xl",LARGE:"lg",MEDIUM:"md",SMALL:"sm",EXTRA_SMALL:"xs"},Container.propTypes={size:oneOfOption(Container.Size)};const every=(a,b)=>a.every(({type:a})=>b===a),Group=factory({type:"div",style:({children:a,block:b})=>({block:b,"btn-group":every(a,Button)})});Group.propTypes={block:bool};const Hero=factory({type:"div",className:"hero",style:({size:a})=>({[`hero-${a}`]:a})});Hero.Size={LARGE:"lg",MEDIUM:null,SMALL:"sm"},Hero.propTypes={size:oneOfOption(Hero.Size)};const Body$2=factory({type:"div",className:"hero-body"});Hero.Body=Body$2;const Image$1=factory({type:"img",className:"img-responsive"});Image$1.propTypes={src:string.isRequired};const Label=factory({type:"span",className:"label",style:({primary:a,secondary:b,success:c,warning:d,error:e,rounded:f})=>({"label-primary":a,"label-secondary":b,"label-success":c,"label-warning":d,"label-error":e,"label-rounded":f})});Label.propTypes={primary:bool,secondary:bool,success:bool,warning:bool,error:bool,rounded:bool};const Menu=factory({type:"ul",className:"menu"}),Divider=factory({type:"li",className:"divider",rewire:({children:a})=>({"data-content":a})}),Item$1=factory({type:"li",className:"menu-item"}),Badge=factory({type:"div",className:"menu-badge"});Menu.Item=Item$1,Menu.Badge=Badge,Menu.Divider=Divider;const Tile=factory({type:"div",className:"tile",style:({centered:a})=>({"tile-centered":a})}),Icon$1=factory({type:"div",className:"tile-icon"}),Title$1=factory({type:"div",className:"tile-title"}),SubTitle$1=factory({type:"small",className:"tile-subtitle"}),Content=factory({type:"div",className:"tile-content"}),Action=factory({type:"div",className:"tile-action"});Tile.Icon=Icon$1,Tile.Title=Title$1,Tile.SubTitle=SubTitle$1,Tile.Content=Content,Tile.Action=Action;export{Accordion,Avatar,Breadcrumb,Button,ButtonGroup,Card,Chip,Column,Columns,Container,Group,Hero,Icon,Image$1 as Image,Label,Menu,Tile,index as hooks};
