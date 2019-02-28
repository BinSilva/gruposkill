import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(album => (
            <tr key={album._id}>
                <td className={album.done}>{album.title}</td>
                <td>
                    <IconButton style='primary' icon='edit'
                        onClick={() => props.editAlbum(album)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.removeAlbum(album)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}