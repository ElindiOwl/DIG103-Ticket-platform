import { BackgroundFrame, BackgroundImage, Text } from 'shared/ui';
import type { FC } from 'react';

import { useGetArtistByIdQuery } from '../../api';

interface ArtistPreviewProps {
    artistId: number
}

export const ArtistPreview: FC<ArtistPreviewProps> = ({ artistId }) => {
	const { data } = useGetArtistByIdQuery(artistId as number, {
		skip: !artistId
	})

	if (!data) {
		return <Text>Loading...</Text>
	}

	return (
		<div>
			<BackgroundFrame type={'small'} variant={'mask'}>
				<BackgroundImage imageUrl={data.image}/>
			</BackgroundFrame>
		</div>
	)
}