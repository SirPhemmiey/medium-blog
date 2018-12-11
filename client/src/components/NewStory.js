import React from 'react';
import axios from 'axios';
import Navbar from './Partials/Navbar';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default class NewStory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            title: '',
            body: '',
            tags: [
                { id: 'Th', text: 'oko'},
                { id: "Thailand", text: "Thailand" },
                { id: "India", text: "India" }
            ],
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
             ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
        //alert(event.target.value);
    }
    handleBody(event) {
        this.setState({body: event.target.value});
    }

    async componentDidMount() {
        let { title, body, tags } = this.state;
        const result = await axios.post('/post/createPost', {
            title, body, tags
        })
        if (result.data.success) {

        }
        else {

        }
    }

    // async handleForm(e) {
    //     //e.preventDefault();
    //     let { title, body} = this.state;
    //     const result = await axios.post('/post/createPost', {
    //         title, body
    //     })
    //     if (result.data.message == 'success') {
    //         alert("done")
    //     }
    //     else {
    //         alert("Error");
    //     }
    // }

    handleForm(event) {
        event.preventDefault();
        let { title, body} = this.state;
        axios.post('/post/createPost', {title, body})
        .then(res => {
            if (res.data.message == 'success') {
                alert("done");
            }
            else {
                alert("nope")
            }
        })
    }


    handleDelete(i) {
        const { tags } = this.state;
        this.setState({ tags: tags.filter((tag, index) => index != i)});
    };
    handleAdd(tag) {
        const { tags } = this.state;
        this.setState(state => ({ tags: [...state.tags, tag]}));
    };
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        //re-render
        this.setState({tags: newTags})
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                    <div className="container">
                        <div className="row">
                        <div className=" col-md-10 col-xs-12">
                        <div className="card-body">
            <form onSubmit={this.handleForm}>
            <div className="form-group">
              <div className="form-label-group">
                <input style={{border : 'none', fontFamily: 'Righteous', fontSize: '30px'}} type="text" id="subject" className="form-control" onChange={this.handleTitle} placeholder="Title"/>
              </div>
            </div>

            <div className="form-group">
              <div className="form-label-group">
                <textarea style={{border: 'none', fontFamily: 'monospace', fontSize: '25px'}} id="complain" value={this.state.complain} className="form-control" placeholder="Tell your story..."  cols="30" rows="10" onChange={this.handleBody} ></textarea>
              </div>
            </div>

            {/* <div className="form-group">
              <div className="form-label-group">
                <input style={{border : 'none', fontFamily: 'Righteous', fontSize: '30px'}} type="text" id="subject" className="form-control" onChange={this.handleSubject} placeholder="Title"/>
              </div>
            </div> */}

             {/* <input onClick={this.handleForm} className="btn btn-primary btn-block" type="submit" name="Send"/> */}
             <button type="submit">Add</button>

             {/* <button type="submit" className="btn btn-primary" onClick={alert("hi")}>CLICK</button> */}

            <ReactTags tags={this.state.tags}
                        suggestions={this.state.suggestions}
                        delimiters={delimiters}
                        handleAddition={this.handleAdd}
                        handleDelete={this.handleDelete}
                        handleDrag={this.handleDrag}
            />
          </form>
            </div>
                        </div>
                        </div>
                    </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const titlePlaceholder = {

};

const bodyPlaceholder = {

};