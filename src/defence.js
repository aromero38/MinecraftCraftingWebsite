import {importBlocks, importItems, importCraftingRecipies} from './functions.js'
import React, {useState} from 'react';
const blockImages = importBlocks(require.context('./assets/textures/block', false, /\.(png|jpe?g|svg)$/));
const itemImages = importItems(require.context('./assets/textures/item', false, /\.(png|jpe?g|svg)$/));
const craftingImages = importCraftingRecipies(require.context('./assets/textures/craft_items', false, /\.(png|jpe?g|svg|gif)$/));

export const Defence = (r) => {
    const [defence, setDefence] = useState('');

    function RenderDefence(){
        return <img className='centerCraftingTableDefence' src={craftingImages[defence]} alt=''></img>
      }
    return(
    <div className='centerItemsDefence craftingBGColor'> {/*Defence*/} 
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_helmet.png']} onClick={() => setDefence('craft_helmets.gif')} alt='Diamond Helmet' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_chestplate.png']} onClick={() => setDefence('craft_chestplates.gif')} alt='Diamond Chestplate' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_leggings.png']} onClick={() => setDefence('craft_leggings.gif')} alt='Diamond Leggings' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_boots.png']} onClick={() => setDefence('craft_boots.gif')} alt='Diamond Boots' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_sword.png']} onClick={() => setDefence('craft_swords.gif')} alt='Diamond Sword' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['bow.png']} onClick={() => setDefence('craft_bow.png')} alt='Bow' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['arrow.png']} onClick={() => setDefence('craft_arrow.png')} alt='Arrow' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['diamond_horse_armor.png']} onClick={() => setDefence('craft_horsearmor.png')} alt='Diamond Horse Armor' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['shield.png']} onClick={() => setDefence('craft_shield.png')} alt='Shield' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['spectral_arrow.png']} onClick={() => setDefence('craft_spectralarrow.png')} alt='Spectral Arrow' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['regeneration_tipped_arrow.png']} onClick={() => setDefence('craft_tippedarrow.png')} alt='Regeneration Tipped Arrow' /></button>
        <button className='itemSlot pointerCursor'><img src={blockImages['conduit.png']} onClick={() => setDefence('craft_conduit.png')} alt='Conduit' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['turtle_helmet.png']} onClick={() => setDefence('craft_turtleshell.png')} alt='Turtle Helmet' /></button>
        <button className='itemSlot pointerCursor'><img src={itemImages['crossbow_standby.png']} onClick={() => setDefence('craft_crossbow.png')} alt='Crossbow' /></button>
        <RenderDefence>
        </RenderDefence>

    </div>
    )
}