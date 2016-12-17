
import {View} from "tide/components";
import React, {PropTypes} from "react";
import {Form, Input, Checkbox} from 'orion/ui/forms';
import {Div, Button, Spacer, ErrorState} from 'orion/ui/helpers';
import {Link} from 'tide/router/link';

export class AlbumUploadPage extends View {
    render() {
        return (
            <div className="l-col-gut-lg">
                <h1>New Album - Add Album Tags -- Upload</h1>

                <form>
                    <input type="text" className="l-input l-row-gut-2"/> <br/> <br/>
                    <textarea name="" id="" cols="30" rows="10" className="l-textarea"></textarea>

                    <h3>Community</h3>
                    <div className="l-select-wrapper">
                        <select name="" className="l-select">
                            <option value="">1</option>
                        </select>
                    </div>
                    
                    <h3>Content Type</h3>
                    <input type="radio"/> Option one
                </form>
                
                <button>Continue</button>
            </div>
        )
    }
}
