using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace QRPayer.BasicSamples
{
    public partial class ProduceSeafoodCategoryEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "QRPayer.BasicSamples.ProduceSeafoodCategoryEditor";

        public ProduceSeafoodCategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}

