import { Hourglass } from 'react-loader-spinner';
import css from "./loader.module.css"

export default function Loader() {
return (
<div className={css.container}>
    <Hourglass
    visible={true}
    height="80"
    width="80"
    ariaLabel="hourglass-loading"
    wrapperStyle={{}}
    wrapperClass=""
    colors={['#306cce', '#72a1ed']}
    />
    </div>
);
}
