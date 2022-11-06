import React from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='feed__inputOpticons'>
                    <InputOption Icon={ImageIcon} title='photo' color="#7065F9" />
                    <InputOption Icon={SubscriptionsIcon} title='video' color="#C7A334" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0C8CD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />

                </div>
            </div>

            {/* Posts */}
            <Post name="" description="introducing myself" message="IT amazing to meet an awesome person like you." />
        </div>
    )
}

export default Feed