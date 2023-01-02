import React, {Component} from 'react';


const API_KEY = 'AIzaSyBv5E6MA2ejzzfObBSZcKU7wz4e4AXNtAg'


var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbPY1Efha9VPRBYW2x1M16A&maxResults=20&order=date&key=${API_KEY}`


class OldMan extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            resultyt: []

        };

        this.clicked = this.clicked.bind(this);

        
    }

    clicked() {
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson)=> {
           //console.log(responseJson); 
           const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
           this.setState({resultyt});
        })
        .catch((error) => {
            console.error(error);
        });
    }

   
    
   
    
    
    render() {
        //console.log(finalURL);
        console.log(this.state.resultyt)

        return(
            <div className="rowstyle">
                <button className="button" onClick={this.clicked}>Get Old Man & The 3 Videos</button>
           
                {
                    this.state.resultyt.map((link, i) => {
                            console.log(link);
                            var frame = <div  key={i} className="youtube"> <iframe width="560" height="315" src={link} frameBorder="0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </div>
                            return frame;
                    })
                  }  

                  {this.frame}
           
           
           
           
                
                    


            
            </div>

        );
    }
 }

 export default OldMan; 