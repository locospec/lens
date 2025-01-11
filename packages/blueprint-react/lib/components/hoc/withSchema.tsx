"use client";

import React from "react";

export interface SchemaComponent<T> {
  type: string;
  config?: T;
}

type WithSchemaProps<T> = {
  schema?: SchemaComponent<T>;
} & T;

export function withSchema<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentType: string
) {
  return function WithSchemaComponent({
    schema,
    ...props
  }: WithSchemaProps<P>): JSX.Element {
    if (schema && schema.type !== componentType) {
      console.error(
        `Invalid schema type. Expected ${componentType}, got ${schema.type}`
      );
      return <></>;
    }

    const finalProps = {
      ...(schema?.config || {}),
      ...props,
    } as P;

    return <WrappedComponent {...finalProps} />;
  };
}
