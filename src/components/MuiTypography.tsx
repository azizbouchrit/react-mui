import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface MuiTypographyProps {
    
}
 
const MuiTypography: FunctionComponent<MuiTypographyProps> = () => {
    return ( <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom >h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>
        
        <Typography variant="subtitle1">sub1 Heading</Typography>
        <Typography variant="subtitle2">sub2 Heading</Typography>

        <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit cumque earum maiores, unde tenetur, culpa non dolor voluptatem tempora obcaecati aut laborum eligendi quam sint impedit? Sapiente quam ex ipsum.</Typography>
        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, nostrum? Minima quam delectus eum perferendis deserunt laudantium molestiae ut impedit et, fuga ex saepe unde. Nobis, optio? Voluptatum, quis amet!</Typography>
    </div> );
}
 
export default MuiTypography;