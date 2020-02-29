import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import api from '../Api'

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSerie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false
    }

    this.saveSeries = this.saveSeries.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data,
          redirect: false
        })
    	})
  }

  saveSeries() {
    const newSerie = {
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    }

    api.saveSerie(newSerie)
      .then((res) => {
        this.setState({
          redirect: '/series/' + this.refs.genre.value
        })
      })

    return false
  }

  render() {
  	return (
      <section className='intro-section'>
        { 
          this.state.redirect &&
          <Redirect to={this.state.redirect}/>
        }
        <div className='container'>
          <h1 className='display-4 my-2'>Nova série</h1>
          <form>
          	<div className='form-row'>
							<div className='col'>
								<div className='form-group'>
									<label htmlFor='name'>Título</label>
									<input type='text' className='form-control' id='name' placeholder='Nome da série' ref='name'/>
								</div>
							</div>
							<div className='col'>
								<div className='form-group'>
									<label htmlFor='status'>Estado</label>
									<select className='form-control' id='status' ref='status'>
										{
											Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)
										}
                  </select>
								</div>
							</div>
						</div>
						
						<div className='form-group'>
							<label htmlFor='genre'>Gênero</label>
							<select className='form-control' id='genre' ref='genre'>
                {
                  this.state.genres
                    .map(key => <option key={key} value={key}>{key}</option>)
                }
              </select>
						</div>
                            
						<div className='form-group'>
							<label htmlFor='comments'>Comentários</label>
							<textarea className='form-control' id='comments' placeholder='Faça seus comentários aqui' ref='comments'></textarea> 
						</div>
            <button type='button' className='btn btn-danger' onClick={this.saveSeries}>Salvar</button>
	        </form>
        </div>
      </section>
    )
  }
}

export default NewSerie
