import { ElindiLogo, Regular } from '../../../assets'

import style from './Elindi.module.scss';

export const Elindi = () => {
	return (
		<div className={style.elindi}>
			<ElindiLogo
				barkStyle={style.elindi_b}
				cheekSkinStyle={style.elindi_b}
				expression={
					<Regular
						expressionMouth={style.elindi_line}
						leftEyeIris={style.elindi_b}
						leftEyeLines={style.elindi_line}
						leftEyeSclera={style.elindi_b}
						rightEyeIris={style.elindi_b}
						rightEyeLines={style.elindi_line}
						rightEyeSclera={style.elindi_b}
					/>
				}
				faceStyle={style.elindi_b}
				foreheadSkinStyle={style.elindi_b}
				leafStyle={style.elindi_a}
				lineStyle={style.elindi_line}
				noseStyle={style.elindi_line}
				skinStyle={style.elindi_b}
				tipNoseStyle={style.elindi_line}
			/>
		</div>
	)
}