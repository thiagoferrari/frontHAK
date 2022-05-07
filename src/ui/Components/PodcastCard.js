import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
	const theme = useTheme();

	return (
		<Card sx={{ display: 'flex' }} onClick={() => window.open('https://rotf.lol/kardec')}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant="h5">
						Akast
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div">
						Podcast
					</Typography>
				</CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
					<IconButton aria-label="previous">
						{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
					</IconButton>
					<IconButton aria-label="play/pause">
						<PlayArrowIcon sx={{ height: 38, width: 38 }} />
					</IconButton>
					<IconButton aria-label="next">
						{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
					</IconButton>
				</Box>
			</Box>
			{/* <CardMedia
				component="img"
				sx={{ maxWidth: 151 }}
				image="https://i.scdn.co/image/ab67656300005f1f50b6a2e0529cebac8830a8c1"
			/> */}
		</Card>
	);
}