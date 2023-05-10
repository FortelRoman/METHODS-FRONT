import {Button, notification, Typography} from "antd";
import {RadioComponent} from "../../conponents/radio";
import {useForm} from "react-hook-form";
import {data} from "./data";
const {Title} = Typography;

type TState = Record<string, string>

const defaultValues = {}

export const SimpleVotes = () => {


    const methods = useForm<TState>({
        mode: 'onTouched',
        defaultValues,
    });

    const {control, handleSubmit, formState: {isValid, isSubmitted}} = methods;

    const onSubmit = (values: TState) => {
        notification.open({
            type: 'success',
            message: 'Ответ записан',
            description: JSON.stringify(values)
        })
        console.log(values)
    }


    return (
        <div className={'page'}>
            <Title level={1}>Опрос</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    data.map(({label, name, options}, index) => (
                        <RadioComponent
                            main={{label: index + 1 + '. ' + label, options}}
                            name={name}
                            control={control}
                            rules={{required: { message: 'Поле обязательное', value: true }}}
                        />
                    ))
                }
                <Button htmlType={'submit'} type={'primary'} disabled={!isSubmitted ? false : !isValid}>Отправить</Button>
            </form>

        </div>
    )
}