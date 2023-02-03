import { updateVideo, uploadVideo } from '@/api'
import { useVideo } from '@/context/videos'
import { Videos } from '@/types'
import { Button, Group, Modal, Progress, Stack, Switch, Text, TextInput } from '@mantine/core'
import { Dropzone, MIME_TYPES } from '@mantine/dropzone'
import { useForm } from '@mantine/form'
import { AxiosError, AxiosResponse } from 'axios'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useMutation } from 'react-query'
import { ArrowBigUpLine } from 'tabler-icons-react'

const EditVideoForm = ({ videoId, setOpen }: { videoId: string, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    const { refetch } = useVideo()

    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            published: true
        }
    })

    type input = Parameters<typeof updateVideo>
    const mutation = useMutation<AxiosResponse<Videos>, AxiosError, input['0']>(updateVideo, {
        onSuccess: () => {
            setOpen(false)
            refetch
        }
    })

    return <form onSubmit={form.onSubmit((values) => mutation.mutate({ videoId, ...values }))}>
        <Stack>
            <TextInput label='Title' required placeholder='My kittycat video :3' {...form.getInputProps('title')} />
            <TextInput label='Description' required placeholder='Description of my kittycat video :3' {...form.getInputProps('description')} />
            <Switch label='Published' {...form.getInputProps('published')} />
            <Button type='submit'>
                Save
            </Button>
        </Stack>
    </form>
}

const UploadVideos = () => {

    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    const mutation = useMutation(uploadVideo)

    const config = {
        onUploadProgress: (progressEvent: any) => {
            const percent = Math.round((progressEvent.loaded + 100) / progressEvent.total)
            setProgress(percent)
        }
    }

    const upload = (files: File[]) => {
        const formData = new FormData();
        formData.append('video', files[0])

        mutation.mutate({ formData, config })

    }
    return (
        <>
            <Modal closeOnClickOutside={false}
                onClose={() => setOpen(false)}
                opened={open}
                title='Upload video'
                size='xl'>
                <Dropzone onDrop={(files) => { upload(files) }} accept={[MIME_TYPES.mp4]} multiple={false} >
                    {(status) => {
                        return (<Group
                            position='center'>
                            <ArrowBigUpLine />
                            <Text>
                                Drag video here or click to find
                            </Text>
                        </Group>)
                    }}
                </Dropzone>
                {progress > 0 && <Progress size='xl' label={`${progress}%`} value={progress} mb='xl' />}
                {mutation.data && <EditVideoForm
                    setOpen={setOpen}
                    videoId={mutation.data.videoId}
                />}
            </Modal>
            <Button onClick={() => setOpen(true)}>
                Upload video
            </Button>
        </>
    )
}

export default UploadVideos