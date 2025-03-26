import React from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessageAlt } from "../form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Input } from "../alt/input";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form'>;
const InputField = <TFieldValues extends FieldValues = FieldValues>({
	form,
	...props
}: InputProps & {
	label?: string;
	description?: string;
	name: Path<TFieldValues>;
	form: UseFormReturn<TFieldValues>;
}) => (
	<FormField
		control={form.control}
		name={props.name}
		render={({ field }) => (
			<FormItem className="gap-y-0">
				{props.label && <FormLabel className="">{props.label}</FormLabel>}
				<FormControl className="-mt-1.5 mb-2">
					<Input {...props} {...field} className="mb-0"/>
				</FormControl>
				{props.description && <FormDescription>{props.description}</FormDescription>}
				<FormMessageAlt/>
			</FormItem>
		)}
	/>
);

export default InputField;
