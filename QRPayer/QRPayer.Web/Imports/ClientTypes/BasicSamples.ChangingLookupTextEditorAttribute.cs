using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace QRPayer.BasicSamples
{
    public partial class ChangingLookupTextEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "QRPayer.BasicSamples.ChangingLookupTextEditor";

        public ChangingLookupTextEditorAttribute()
            : base(Key)
        {
        }
    }
}

