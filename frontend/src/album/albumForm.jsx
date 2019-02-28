import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='albumForm'>
            <Grid cols='4'>
                <select id='userId' className='form-control'
                    value={props.userId}
                    onChange={props.onChangeUserId}>
                    <option value=''>SELECIONE UM ESTILO...</option>
                    <option value='1'>SERTANEJO</option>
                    <option value='2'>ROCK</option>
                    <option value='3'>PAGODE</option>
                    <option value='4'>AXÉ</option>
                    <option value='5'>FUNK</option>
                    <option value='6'>GOSPEL</option>
                    <option value='7'>FORRÓ</option>
                    <option value='8'>CLÁSSICO</option>
                    <option value='9'>INSTRUMENTAL</option>
                    <option value='10'>INDIANO</option>
                </select>
            </Grid>
            <Grid cols='8 6 5'>
                <input id='title' className='form-control'
                    placeholder='Adicione um título'
                    onChange={props.onChangeTitle}
                    value={props.title}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.addAlbum}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.searchAlbum}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.clearAlbum}></IconButton>
            </Grid>
        </div>
    )
}