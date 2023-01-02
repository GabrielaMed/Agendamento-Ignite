import { ArrowRight } from "phosphor-react";
import { Form, FormAnnotation } from "./styles";
import { TextInput, Button, Text } from '@ignite-ui/react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const claimUsernameFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'Nome de usuário deve ter pelo menos 3 letras.' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Nome de usuário deve conter apenas letras e hifen.' })//permite letras e hifen, + indica que pode usar mais de 1 vez, o $ indica que pode começar e terminar com letras e/ou hifen e o i indica que é case sensitive
        .transform(username => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema)
    })
    async function handleClaimUsername(data: ClaimUsernameFormData) { }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
                <TextInput
                    size='sm'
                    prefix="calendar.com/"
                    placeholder="seu-usuario"
                    {...register('username')}
                />
                <Button
                    size="sm"
                    type="submit"
                >
                    Reservar
                    <ArrowRight />
                </Button>
            </Form>
            <FormAnnotation>
                <Text size='sm'>
                    {errors.username
                        ? errors.username.message
                        : 'Digite o nome de usuário desejado'}
                </Text>
            </FormAnnotation>
        </>
    )
}