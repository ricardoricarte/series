import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../Api'

class Series extends Component {
  constructor(props) {
  	super(props)

    this.state = {
    	series: [],
      isLoading: false
    }

    this.renderSeries = this.renderSeries.bind(this)
    this.loadData = this.loadData.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    this.setState({isLoading: true})

    api.loadSeriesByGenre(this.props.match.params.genre)
      .then((res) => {
        this.setState({
          series: res.data,
          isLoading: false
        })
    })
  }

  removeSerieById(id) {
    api.removeSerieById(id)
      .then(res => {
        this.loadData()
      })
  }

  renderSeries(serie) {
    return (
      <div key={ serie.id } className='col-md-4'>
        <div className='card'>
          <img className='card-img-top' src='http://placehold.it/400x250/999/fff' alt=''/>
          <div className='card-body'>
            <h5 className='card-title'> { serie.name } </h5>
            <p className='card-text'> { serie.comments } </p>
            <Link className='btn btn-success btn-block' to={'/series/edit/' + serie.id}>Editar</Link>
            <button className='btn btn-danger btn-block' onClick={ () => this.removeSerieById(serie.id) }>Excluir</button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='container'>
        <div id='intro' className='intro-section'>
          <h1 className='display-4 my-2'>Séries - {this.props.match.params.genre}</h1>
          <div id='series' className='row'>
            {
              this.state.isLoading &&
              <p>Carregando...</p>
            }
            {
              !this.state.isLoading && this.state.series.length === 0 &&
              <div className='alert alert-danger' role='alert'>
                Nenhuma série cadastrada
              </div>
            }
            { 
              !this.state.isLoading &&
              this.state.series.map(this.renderSeries)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Series
