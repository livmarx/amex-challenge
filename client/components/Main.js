import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    console.log('In CompDidMount!');
    console.log('STATE', this.state);
    const res = await axios.get(
      'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init'
    );
    const allEvents = res.data.list;
    console.log('allEvents: ', allEvents);
    this.setState({ events: allEvents });
    console.log('STATE', this.state);
  }

  render() {
    const events = this.state.events || [];
    console.log('all events: ', events);

    return (
      <div className="main">
        <div className="header">
          <h4>More content you might be interested in:</h4>
        </div>
        <div className="events">
          {events.map(event => {
            return (
              <div className="event" key={event.id}>
                <Link
                  to="www.
                espn.go.com"
                >
                  <h4>{event.name}</h4>
                  <img src={event.thumbnail[0].url} className="thumbnail" />
                  <p>{event.branding}</p>
                  <p>
                    {event.categories.map(cat => {
                      return `#${cat} `;
                    })}
                  </p>
                  <br />
                </Link>
              </div>
            );
          })}
        </div>
        <h6>Sponsored Links by Taboola</h6>
      </div>
    );
  }
}
