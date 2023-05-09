import {CheckboxOptionType, Radio, RadioChangeEvent, RadioGroupProps, Typography} from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
const {Text} = Typography;

type Props = {
	main: { options: CheckboxOptionType[], label: string } & Omit<
		RadioGroupProps,
		'options'
	>;
} & UseControllerProps<any>;

const RadioComponent: FC<Props> = ({ main, ...props }) => {
	const { className: classProps, disabled, label, options, ...rest } = main;
	const {
		field: { value, name, onChange, ...restField },
		fieldState: { error },
	} = useController(props);

	const onChangeRadio = (event: RadioChangeEvent) => {
		onChange(event);
	};
	const errorField = { errorText: error?.message, hasError: error };

	return (
		<div className={classNames('form-item', { hasError: errorField?.hasError })}>
			<Text className={'form-item__label'}>{label}</Text>
			<Radio.Group
				onChange={onChangeRadio}
				value={value}
				id={name}
				name={name}
				disabled={disabled}
				className={classNames(classProps)}
				{...rest}
				{...restField}
				size="large"
			>
				<div className={'radio-content'}>
					{options?.map((el) => (
						<Radio key={String(el.value)} value={el.value}>
							{el.label}
						</Radio>
					))}
				</div>
			</Radio.Group>
			<div className={classNames('errorField', { hasError: errorField?.hasError })}>
				{errorField.errorText && <span>{errorField.errorText}</span>}
			</div>
		</div>
	);
};

export default RadioComponent;
