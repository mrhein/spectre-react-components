import"react";import{f as factory,o as oneOfOption}from"./vendor.js";import{bool}from"prop-types";const Chip=factory({type:"div",className:"chip",style:({size:a,active:b})=>({[`chip-${a}`]:a,active:b})});Chip.Size={SMALL:"sm"},Chip.propTypes={active:bool,size:oneOfOption(Chip.Size)};export default Chip;