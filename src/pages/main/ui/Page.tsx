import { EventConclusion, EventFeatures, EventHero } from 'widgets/event';
import { BackgroundColor, BackgroundGrid } from 'shared/ui';

export const Page = () => {
	return (
		<>
			<BackgroundColor>
				<BackgroundGrid>
					<BackgroundColor type={'translucent'}>
						<BackgroundColor type={'faded'}>
							<EventHero/>
							<EventFeatures/>
							<EventConclusion/>
						</BackgroundColor>
					</BackgroundColor>
				</BackgroundGrid>
			</BackgroundColor>
		</>
	)
}