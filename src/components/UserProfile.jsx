import userCss from './CSS/userprofile.module.css'

function UserProfile(){
    return (
        <div className={userCss.card}>
            <h1 className={userCss.heading}>User Profile</h1>
            <div >
                <img className={userCss} src="https://lisamaco.com/wp-content/uploads/2024/12/05-13201-post/Professional-Headshot.jpg"/>
            </div>
            <h4>Anil Siddhu</h4>
            <p>Software Engineer</p>
        </div>
    )
}

export default UserProfile