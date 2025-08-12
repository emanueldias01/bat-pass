
export default function generatePass() : string{
  let pass = '';
    let chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(randomIndex);
    }


    return pass;
}