import {loadCardInfo}from '../apis.js';
import { renderCardInfo } from './detailsView.js';
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get("id");
let cardInfo=[];
async function init(){//controller
    cardInfo=await loadCardInfo(cardId);//state
    renderCardInfo(cardInfo);
}  
init();