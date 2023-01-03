import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, FormError, Header } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const registerFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'Nome de usuário deve ter pelo menos 3 letras.' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Nome de usuário deve conter apenas letras e hifen.' })//permite letras e hifen, + indica que pode usar mais de 1 vez, o $ indica que pode começar e terminar com letras e/ou hifen e o i indica que é case sensitive
        .transform(username => username.toLowerCase()),

    name: z
        .string()
        .min(3, { message: 'Nome deve ter pelo menos 3 letras.' })
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    async function handleRegister(data: RegisterFormData) {

    }

    return (
        <Container>
            <Header>
                <Heading as="strong">
                    Bem-vindo ao Agendamento!
                </Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                </Text>
                <MultiStep size={4} currentStep={1} />
            </Header>
            <Form as="form" onSubmit={handleSubmit(handleRegister)}>
                <label>
                    <Text size='sm'>
                        Nome de usuário
                    </Text>
                    <TextInput prefix="calendar.com/" placeholder="seu-usuario" {...register('username')} />
                    {errors.username && (
                        <FormError size="sm">
                            {errors.username.message}
                        </FormError>
                    )}
                </label>
                <label>
                    <Text size='sm'>Nome completo</Text>
                    <TextInput placeholder="Seu nome" {...register('name')} />

                    {errors.name && (
                        <FormError size="sm">
                            {errors.name.message}
                        </FormError>
                    )}
                </label>

                <Button type="submit">
                    Próximo passo
                    <ArrowRight />
                </Button>
            </Form>
        </Container>
    )
}