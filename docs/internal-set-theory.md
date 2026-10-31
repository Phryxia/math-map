# 내부집합론

# 개요

**내부집합론(internal set theory)** 은 [비표준 해석학](nonstandard-analysis.md)을 새 수를 만들지 않고 전개하는 공리계다. 무한소를 써서 미분을 계산하려면 보통 [실수](real-numbers.md)열의 몫에 초필터를 잡아 초실수체를 짓고, 어떤 진술이 옮겨 가는지 확인하는 준비가 필요하다. 내부집합론은 실수는 그대로 두고 각 실수가 표준인지를 묻는 술어 하나와 그 술어의 공리 셋을 더해, 표준이 아닌 실수 가운데서 무한소를 얻는다.

# 직관

무한소를 쓰려면 실수열의 몫에 초필터를 잡아 초실수체를 짓고, 어떤 진술이 옮겨 가는지 논리식의 꼴로 확인해야 한다. 준비를 줄이려면 새 수를 만드는 대신 $\mathbb R$ 을 그대로 두고 각 실수에 표준인지를 묻는다. $0,1,\pi$ 처럼 정의식으로 지목할 수 있는 수는 표준이고, 표준이 아닌 수가 있다고 선언한다. 모든 표준 자연수보다 큰 $\nu\in\mathbb N$ 이 그런 수다.

$\mathbb N$ 의 표준 유한 부분집합 $F$ 마다 $\max F+1$ 이 $F$ 의 원소를 모두 넘는다. 아래 정의 절의 이상화 공리는 이것에서 모든 표준 자연수를 한꺼번에 넘는 $\nu$ 를 준다. 표준 양수 $\varepsilon$ 을 잡으면 $1/\varepsilon$ 보다 큰 표준 자연수가 있고 $\nu$ 는 그보다 크므로 $1/\nu\lt \varepsilon$ 이고, 초실수체 없이 무한소를 얻는다.

대가로 집합을 만드는 규칙이 좁아져 "표준 자연수 전체" 는 집합이 아니다. 집합이라면 최소 상계가 있어야 하는데 표준 자연수에 $1$ 을 더해도 표준이므로 그런 상계가 없고, 분류 공리를 "표준" 이 든 조건에 쓸 수 없다는 제한이 이것을 막는다.

# 정의

## 언어와 공리꼴

**내부집합론(internal set theory, IST)** 은 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel set theory with choice)의 언어에 한 자리 술어 $\mathrm{st}$ 를 더하고 아래 세 공리꼴을 더한 것이다. $\mathrm{st}(x)$ 는 "$x$ 가 표준이다" 로 읽는다.

$\mathrm{st}$ 가 나오지 않는 논리식을 **내부 논리식(internal formula)**, 나오는 것을 **외부 논리식(external formula)** 이라 한다. $x\gt 0$ 은 내부 논리식이고, $\mathrm{st}(x)\wedge x\gt 0$ 은 외부 논리식이다. ZFC 의 공리는 내부 논리식에만 적용한다. 특히 분류 공리를 외부 논리식에 쓰지 않는다.

## 이상화

이상화(idealization) 공리꼴은 다음이다. 내부 이항 관계 $R$ 에 대해 다음이 동치다.

$$
\forall^{\mathrm{st\thinspace fin}}F\quad \exists x\quad \forall y\in F\quad R(x,y)
\quad\Longleftrightarrow\quad
\exists x\quad \forall^{\mathrm{st}}y\quad R(x,y)
$$

왼쪽의 $\forall^{\mathrm{st\thinspace fin}}F$ 는 표준 유한집합 전체에 대한 한정이고, 오른쪽의 $\forall^{\mathrm{st}}y$ 는 표준 원소 전체에 대한 한정이다. 유한개씩 만족시킬 수 있으면 표준 원소 전체를 한꺼번에 만족시키는 것이 있다는 뜻이다. $R(x,y)$ 를 $x\in\mathbb N\wedge(y\in\mathbb N\to y\lt x)$ 로 두면 왼쪽은 직관 절의 $\max F+1$ 이 보이고, 오른쪽이 모든 표준 자연수보다 큰 $\nu$ 를 준다.

## 표준화

표준화(standardization) 공리꼴은 다음이다. 표준 집합 $X$ 와 임의의 논리식 $P$ 에 대해, 표준 집합 $Y$ 가 있어 모든 표준 $z$ 에서

$$
z\in Y\iff z\in X\wedge P(z)
$$

가 성립한다. $Y$ 는 표준 원소만 보면 $P$ 로 걸러낸 것과 같고, 표준이 아닌 원소가 무엇인지는 말하지 않는다. $X=\mathbb N$, $P(z)$ 를 "$z$ 가 짝수" 로 두면 $Y$ 는 짝수 전체다. $P(z)$ 를 $\mathrm{st}(z)$ 로 두면 $Y$ 는 표준 원소를 모두 포함하는 표준 집합이고, 전이 공리로 $Y=\mathbb N$ 이다.

## 전이

전이(transfer) 공리꼴은 다음이다. $A(x,t\_1,\dots,t\_k)$ 가 내부 논리식이고 매개변수 $t\_1,\dots,t\_k$ 가 모두 표준이면

$$
\forall^{\mathrm{st}}x\quad A(x,t\_1,\dots,t\_k)\quad \Longrightarrow\quad \forall x\quad A(x,t\_1,\dots,t\_k)
$$

이다. 표준 대상만 써서 진술한 내부 성질은 표준 원소에서 확인하면 전부에서 성립한다. 따라서 표준 매개변수로 유일하게 규정되는 대상은 표준이며, $0$, $\mathbb N$, $\mathbb R$, $\pi$ 가 그렇다.

## 무한소와 근접

$x$ 가 **무한소(infinitesimal)** 라 함은 모든 표준 양수 $\varepsilon$ 에 대해 $\vert x\vert\lt \varepsilon$ 인 것이다. $x-y$ 가 무한소이면 $x\approx y$ 로 쓴다. $\vert x\vert$ 가 어떤 표준 수보다 작으면 $x$ 를 **유한(limited)** 이라 한다. 직관 절의 $1/\nu$ 는 무한소이고 유한이며, $\nu$ 는 유한이 아니다. $1/\nu\approx 0$ 이다.

# 성질

## 보존성

> IST 는 ZFC 의 보존적 확대다. 내부 논리식으로 쓴 정리가 IST 에서 증명되면 ZFC 에서도 증명된다(Nelson).[^1]

증명의 요지는 IST 의 증명을 ZFC 의 증명으로 옮기는 번역 절차를 주는 것이다. 세 공리꼴을 각각 유한 만족가능성, 선택, 논리식의 상대화로 풀어 쓰면 $\mathrm{st}$ 가 사라진다. 따라서 무한소를 쓴 증명은 표준 수학의 증명을 줄여 쓴 것이고 새 정리를 주지 않는다. 같은 결론이 초곱 쪽 구성에서도 나온다.

## 표준부분

> 유한인 실수 $x$ 마다 $x\approx s$ 인 표준 실수 $s$ 가 유일하게 있다.

$A=\lbrace t:t$ 가 표준이고 $t\le x\rbrace$ 를 표준화로 걸러 표준 집합을 얻고 그 상한을 $s$ 로 둔다. 상한은 표준 매개변수로 규정되므로 전이로 표준이다. $x-s$ 가 무한소가 아니면 $s$ 와 $x$ 사이에 표준 수가 들어가 상한의 정의에 어긋난다. 이 $s$ 를 $x$ 의 **표준부분**이라 한다.

## 연속과 미분

표준 함수 $f$ 와 표준 점 $a$ 에 대해, $f$ 가 $a$ 에서 연속인 것과 $x\approx a$ 마다 $f(x)\approx f(a)$ 인 것이 동치다. 도함수는 무한소 $dx\ne0$ 에 대해 차분몫의 표준부분이며, 그 값이 $dx$ 의 선택에 무관한 것이 미분가능성이다.

표준이 아닌 $a$ 에서 같은 진술을 쓰면 원래 정의와 어긋나므로 한정을 표준 대상으로 제한한다.

## 외부 집합

"표준 자연수 전체", "무한소 전체", "유한인 실수 전체" 는 집합이 아니다. 집합이라면 이상화 공리와 어긋나는 원소가 나온다. 이 셋을 다루려면 IST 밖에서 외부 집합을 허용하는 확장을 쓴다.

# 활용

- 미적분의 재진술. 극한의 $\varepsilon$ 과 $\delta$ 를 무한소의 근접으로 바꾸면 한정기호가 둘 줄어든다. 연속, 미분, [적분](riemann-integral.md), 일양수렴이 모두 이 꼴로 다시 쓰인다.
- [Loeb 측도](loeb-measure.md). 초유한 집합 위의 세기 측도를 표준부분으로 내려 진짜 측도를 얻는 구성이 이 공리계 안에서도 그대로 된다.
- 섭동 문제. 작은 매개변수 $\varepsilon$ 을 무한소로 두면 특이 섭동의 경계층이 무한소 폭의 구간으로 직접 다뤄진다.
- 구성의 생략. 초필터와 몫을 거치지 않으므로 비표준 논법을 ZFC 의 확장 하나로 바로 쓴다.

[^1]: E. Nelson, "Internal set theory: a new approach to nonstandard analysis", Bulletin of the American Mathematical Society 83 (1977), https://doi.org/10.1090/S0002-9904-1977-14398-X

# 연관 문서

## 선수지식

- [비표준 해석학](nonstandard-analysis.md)

## 더 알아보기

- [Radically elementary 확률론](radically-elementary-probability.md)

#logic #analysis #set_theory
