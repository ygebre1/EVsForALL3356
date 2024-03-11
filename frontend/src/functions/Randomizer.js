export default function Randomizer(props) {
    //outputs random float value as prices used for testing
    var rand = Math.floor(Math.random() * props.range + props.base_num);
    return rand
}
