using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace QRPayer.Northwind
{
    public partial class CustomerEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "QRPayer.Northwind.CustomerEditor";

        public CustomerEditorAttribute()
            : base(Key)
        {
        }
    }
}

