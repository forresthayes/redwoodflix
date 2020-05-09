import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const MovieForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.movie?.id)
  }

  return (
    <div className="box-border text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-4 mb-4"
          titleClassName="mt-0 font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="title"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="title"
          defaultValue={props.movie?.title}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="title" className={CSS.errorMessage} />

        <Label
          name="description"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="description"
          defaultValue={props.movie?.description}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="description" className={CSS.errorMessage} />

        <Label
          name="released_on"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="released_on"
          defaultValue={props.movie?.released_on}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="released_on" className={CSS.errorMessage} />

        <Label
          name="rating"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="rating"
          defaultValue={props.movie?.rating}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="rating" className={CSS.errorMessage} />

        <Label
          name="total_gross"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="total_gross"
          defaultValue={props.movie?.total_gross}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="total_gross" className={CSS.errorMessage} />

        <Label
          name="director"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="director"
          defaultValue={props.movie?.director}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="director" className={CSS.errorMessage} />

        <Label
          name="duration"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="duration"
          defaultValue={props.movie?.duration}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="duration" className={CSS.errorMessage} />

        <Label
          name="image_file_name"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="image_file_name"
          defaultValue={props.movie?.image_file_name}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="image_file_name" className={CSS.errorMessage} />

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MovieForm
