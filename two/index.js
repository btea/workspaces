import axios from 'axios';

axios.get('https://btea.site/fileApi/image?type=animate&text=天空高远，大风吟唱······&width=450').then(res => {
    console.log(res);
});
