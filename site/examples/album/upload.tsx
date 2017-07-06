import * as React from "react";
import {View} from "tide";

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
