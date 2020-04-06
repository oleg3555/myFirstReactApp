import React from 'react';
import './Content.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src='data:image/jpeg;base64,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'/>
            </div>
            <div>
                Ava +description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;