import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className={s.main}>
        <div>Картинка хедер</div>
        <div>Ava + Description</div>
        <MyPosts />
        
      </main>
  );
}
export default Profile;