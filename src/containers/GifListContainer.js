import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    handleSubmit = event => {
        event.preventDefault()
        this.fetchGifs(event.target.searchTerm.value)
    }

    fetchGifs = searchTerm => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=HhAz23LCoJORaYpAlCasJ35sMWCYNlzm&rating=g`)
        .then(resp => resp.json())
        .then(gif => {this.setState({
            gifs: gif.data
        })
    })
    }

    render() {
        return(
            <div>
                <GifList gif={this.state.gifs} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default GifListContainer