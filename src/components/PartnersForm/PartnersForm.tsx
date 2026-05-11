import { useForm, type SubmitHandler } from "react-hook-form";
import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";
import { toast } from "react-toastify";
import { ArrowRight } from "lucide-react";

import Button from "@components/ui/Button/Button";
import Checkbox from "@components/ui/Checkbox/Checkbox";
import Field from "@components/ui/Field/Field";
import PhoneField from "@components/ui/PhoneField/PhoneField";
import { PRIVACY_POLICY_URL } from "@config/env";
import { emailService, type PartnersFormData } from "@services/email";
import { regexs } from "@utils/regex";

import s from "./PartnersForm.module.scss";

const PARTNERSHIP_OPTIONS = [
  "Освітнє агентство",
  "Блогер / Інфлюенсер",
  "Освітня платформа або портал",
  "Консультант / Коуч",
  "Інше",
];

const phoneUtil = PhoneNumberUtil.getInstance();

const isValidPhone = (value: string) => {
  try {
    return (
      phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(value)) ||
      "Невалідний номер"
    );
  } catch {
    return "Невалідний номер";
  }
};

const normalizePhoneE164 = (value: string): string => {
  try {
    const parsed = phoneUtil.parseAndKeepRawInput(value);
    if (!phoneUtil.isValidNumber(parsed)) return value;
    return phoneUtil.format(parsed, PhoneNumberFormat.E164);
  } catch {
    return value;
  }
};

const DEFAULTS: PartnersFormData = {
  fullName: "",
  phone: "",
  email: "",
  partnershipType: "",
  audience: "",
  personalDataConsent: false,
};

const PartnersForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnersFormData>({ defaultValues: DEFAULTS });

  const onSubmit: SubmitHandler<PartnersFormData> = async (data) => {
    try {
      await emailService.sendPartnersForm({
        ...data,
        phone: normalizePhoneE164(data.phone),
      });
      toast.success("Заявку успішно надіслано! Ми зв'яжемось протягом 1 робочого дня.");
      reset(DEFAULTS);
    } catch {
      toast.error("Не вдалося надіслати заявку. Спробуйте пізніше або напишіть на partners@creditup.ua");
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3 className={s.heading}>Залишити заявку</h3>

      <div className={s.row}>
        <Field label="Ваше ім'я" htmlFor="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            placeholder="Олена Коваль"
            className={`field-control ${errors.fullName ? "field-control--error" : ""}`}
            maxLength={80}
            {...register("fullName", {
              required: "Обов'язкове поле",
              maxLength: { value: 80, message: "Максимум 80 символів" },
              validate: (v) =>
                regexs.fullName.test(v) || "Введіть як у паспорті",
            })}
          />
        </Field>
        <Field label="Телефон" htmlFor="phone" error={errors.phone?.message}>
          <PhoneField
            id="phone"
            error={!!errors.phone}
            {...register("phone", {
              required: "Обов'язкове поле",
              validate: { isValidPhone },
            })}
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          placeholder="email@example.com"
          className={`field-control ${errors.email ? "field-control--error" : ""}`}
          maxLength={254}
          {...register("email", {
            required: "Обов'язкове поле",
            pattern: { value: regexs.email, message: "Невалідна адреса" },
            maxLength: { value: 254, message: "Максимум 254 символи" },
          })}
        />
      </Field>

      <Field
        label="Тип партнерства"
        htmlFor="partnershipType"
        error={errors.partnershipType?.message}
      >
        <select
          id="partnershipType"
          className={`field-control field-control--select ${errors.partnershipType ? "field-control--error" : ""}`}
          defaultValue=""
          {...register("partnershipType", { required: "Оберіть тип" })}
        >
          <option value="" disabled>
            Оберіть тип
          </option>
          {PARTNERSHIP_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Розкажіть про вашу аудиторію"
        htmlFor="audience"
        error={errors.audience?.message}
      >
        <textarea
          id="audience"
          placeholder="Коротко опишіть вашу аудиторію або напрям діяльності..."
          className={`field-control field-control--textarea ${errors.audience ? "field-control--error" : ""}`}
          rows={4}
          {...register("audience", {
            required: "Обов'язкове поле",
            maxLength: { value: 2000, message: "Максимум 2000 символів" },
          })}
        />
      </Field>

      <Checkbox
        id="personalDataConsent"
        label={
          <>
            Я даю згоду на обробку моїх персональних даних відповідно до{" "}
            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noreferrer"
              className={s.policyLink}
            >
              Політики конфіденційності
            </a>
            <span className={s.required}>*</span>
          </>
        }
        error={errors.personalDataConsent?.message}
        {...register("personalDataConsent", { required: "Необхідна згода" })}
      />

      <Button type="submit" variant="submit" disabled={isSubmitting}>
        {isSubmitting ? "Надсилаємо…" : (
          <span className={s.submitInner}>
            Надіслати заявку <ArrowRight size={18} />
          </span>
        )}
      </Button>

      <p className={s.note}>
        Натискаючи кнопку, ви погоджуєтесь із{" "}
        <a href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
          Політикою конфіденційності
        </a>
      </p>
    </form>
  );
};

export default PartnersForm;
