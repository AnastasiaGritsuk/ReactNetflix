import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { App } from '../../components/App'
import { FilmCover } from '../../components/film/FilmCover'
import * as pageActions from './detailsData/detailsActions'

class DetailsContainer extends React.Component {
    constructor (props) {
        super(props);

        const title = props.match.params.title || '';
        if (title) {
            props.pageActions.getFilmAction(title);
        }
    }

    render () {
        return (
            <App>
                <FilmCover film={this.props.page.film} history={this.props.history}/>
            </App>
        );
    }
}

function mapStateToProps (state) {
    return {
        page: state.detailsContainer
    }
}

function mapDispatchToProps (dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);