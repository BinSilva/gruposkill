import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import AlbumForm from './albumForm'
import AlbumList from './albumList'

const URL = 'http://127.0.0.1:8000/api/albuns'

export default class Album extends Component {

    constructor(props) {
        super(props)
        this.state = { title: '', userId: '', list: [] }

        this.onChangeUserId = this.onChangeUserId.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.addAlbum = this.addAlbum.bind(this)
        this.searchAlbum = this.searchAlbum.bind(this)
        this.refresh = this.refresh.bind(this)
        this.clearAlbum = this.clearAlbum.bind(this)

        this.editAlbum = this.editAlbum.bind(this)
        this.removeAlbum = this.removeAlbum.bind(this)

        let updateId;

        this.refresh();
    }

    refresh(userId = '', title = '') {
        const searchById = userId ? `&user_id=/${userId}/` : ''
        const searchByTitle = title ? `&title__regex=/${title}/` : ''
        axios.get(`${URL}?sort=-createdAt${searchById}${searchByTitle}`)
            .then(resp => this.setState({ ...this.state, userId, title, list: resp.data }))
    }

    searchAlbum() {
        this.refresh(this.state.userId, this.state.title)
    }

    onChangeUserId(e) {
        this.setState({ ...this.state, userId: e.target.value })
    }

    onChangeTitle(e) {
        this.setState({ ...this.state, title: e.target.value })
    }

    addAlbum() {
        const userId = this.state.userId
        const title = this.state.title
        if (!userId) {
            alert('Informe o usuário!')
            return false;
        }
        if (!title) {
            alert('Informe o título!')
            return false
        }
        if (this.updateId) {
            axios.put(`${URL}/${this.updateId}`, { userId, title })
                .then(resp => this.refresh());
        } else {
            axios.post(URL, { userId, title })
                .then(resp => this.refresh());
        }
        this.updateId = '';
    }

    removeAlbum(album) {
        axios.delete(`${URL}/${album._id}`)
            .then(resp => this.refresh(this.state.userId, this.state.title))
    }

    clearAlbum() {
        this.refresh();
        this.updateId = '';
    }

    editAlbum(album) {
        this.setState({ userId: album.userId })
        this.setState({ title: album.title })
        this.updateId = album._id;
    }

    render() {
        return (
            <div>
                <PageHeader name='Álbum' small='Cadastro'></PageHeader>
                <AlbumForm
                    userId={this.state.userId}
                    title={this.state.title}
                    onChangeUserId={this.onChangeUserId}
                    onChangeTitle={this.onChangeTitle}
                    addAlbum={this.addAlbum}
                    searchAlbum={this.searchAlbum}
                    refresh={this.refresh}
                    clearAlbum={this.clearAlbum}
                />
                <AlbumList
                    list={this.state.list}
                    editAlbum={this.editAlbum}
                    removeAlbum={this.removeAlbum} />
            </div>
        )
    }
}