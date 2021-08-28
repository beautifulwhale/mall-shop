import { debounce } from './utils'
import event from '../plugin/event'


export const imgLoadMixins = {
    data() {
        return {
            imgLoadListen: null
        }
    },
    mounted() {
        let refresh = debounce(this.$refs.scroll.refresh, 200);
        this.imgLoadListen = () => {
            // this.$refs.scroll.refresh();
            refresh();
        }
        event.on("imgLoad", this.imgLoadListen);
    },
}