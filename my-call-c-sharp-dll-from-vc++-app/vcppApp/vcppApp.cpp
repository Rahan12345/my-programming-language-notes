// CPP app

#include "Windows.h"
#include "msxml2.h"
#import "..\vcsharpLib\bin\Debug\vcsharpLib.tlb" no_namespace

#include "iostream"
using namespace std;

int main() {

	CoInitialize(NULL);

	IClass1Ptr obj;
	obj.CreateInstance(__uuidof(Class1));

	int expected = 1234321;
	cout
		<< " calling cs library from vc++, expected value: " << expected
		<< endl;

	int actual = obj->getMethod1();
	assert(expected == actual);

	cout
		<< ", actual value: " << actual
		<< endl
		<< " *** SUCCESS *** "
		<< endl;

	CoUninitialize();

	return 0;
}
