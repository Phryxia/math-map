# 약한 König 보조정리

# 개요

**약한 König 보조정리(weak König's lemma)** 는 마디마다 가지가 둘 이하로 갈라지는 나무에 마디가 무한히 많으면 뿌리에서 끝없이 내려가는 가지가 있다는 진술이다. 뿌리에서 왼쪽과 오른쪽으로 갈라지는 나무가 무한하면, 두 갈래 가운데 아래 마디가 무한히 많은 쪽이 적어도 하나 있다. 그쪽으로 내려가기를 되풀이하면 끝없는 가지가 나오지만, 어느 쪽이 무한한지를 정하는 계산 절차는 일반적으로 없다. [역수학](reverse-mathematics.md)은 이 진술을 공리로 더한 체계로 해석학의 정리 가운데 어느 것이 이런 비구성적 선택을 필요로 하는지 가른다.

# 직관

$0$ 과 $1$ 로 된 유한 수열을 마디로 삼고, 앞부분을 잘라 얻은 수열이 다시 마디가 되도록 모은 것을 이진 나무라 한다. 마디가 무한히 많은 나무를 받았다고 하자. 무한히 긴 가지를 하나 찾는다.

뿌리에서 시작해 한 칸씩 내려간다. 마디 전체가 무한한데 두 자식 아래가 모두 유한하면 합이 유한하므로, 두 자식 가운데 적어도 하나는 그 아래에 무한히 많은 마디가 있다. 무한한 쪽으로 내려가기를 반복하면 가지가 나온다. 매 칸의 "왼쪽 아래가 무한한가" 는 모든 길이 $n$ 에 대해 묻는 물음이라 유한 번의 계산으로 답이 나오지 않는다. 마디를 판정하는 절차가 있는 무한 이진 나무 가운데 계산 가능한 가지가 하나도 없는 것이 존재한다. 서로 분리할 수 없는 두 재귀적 열거 가능 집합을 가르는 함수 전체를 가지로 갖는 나무가 그 예이고, 이 성질은 [정지 문제](halting-problem.md)가 계산 가능하지 않다는 사실에서 나온다.

# 정의

$2^{\lt\mathbb N}$ 을 $0,1$ 로 된 유한 수열 전체라 하자. $T\subseteq2^{\lt\mathbb N}$ 이 **이진 나무(binary tree)** 라는 것은 $\sigma\in T$ 이고 $\tau$ 가 $\sigma$ 의 앞부분이면 $\tau\in T$ 라는 뜻이다. $1$ 이 두 번 연달아 나오지 않는 유한 수열 전체는 무한 이진 나무다. 길이가 $3$ 이하인 수열 전체는 유한 이진 나무다. $\lbrace\langle 1\rangle\rbrace$ 는 앞부분인 빈 수열을 포함하지 않아 이진 나무가 아니다.

$f\colon\mathbb N\to\lbrace 0,1\rbrace$ 가 $T$ 의 **가지(path)** 라는 것은 모든 $n$ 에서 $\langle f(0),\dots,f(n-1)\rangle\in T$ 라는 뜻이다. $1$ 이 연달아 나오지 않는 나무에서 $0,0,0,\dots$ 와 $0,1,0,1,\dots$ 는 가지이고 $1,1,0,0,\dots$ 는 가지가 아니다.

약한 König 보조정리는 다음 진술이다.

> 무한한 이진 나무는 가지를 갖는다.

원래의 König 보조정리(König's lemma)는 각 마디의 자식이 유한 개이기만 하면 같은 결론을 준다. 자식을 둘로 제한한 것이 "약한" 이다.

$\mathrm{WKL}\_0$ 은 $\mathrm{RCA}\_0$ 에 이 보조정리를 공리로 더한 체계다.

# 성질

## 동치인 정리

$\mathrm{RCA}\_0$ 위에서 다음이 모두 약한 König 보조정리와 동치다.[^1]

- $\lbrack 0,1\rbrack$ 의 [Heine–Borel 콤팩트성](heine-borel.md).
- $\lbrack 0,1\rbrack$ 위 연속함수가 최댓값을 갖는다.
- 가산 언어의 1차 논리에 대한 Gödel 완전성 정리(completeness theorem).
- $\lbrack 0,1\rbrack^n$ 에서의 [Brouwer 고정점 정리](brouwer-fixed-point.md).
- 가산 가환환이 [소 아이디얼](prime-ideals.md)을 갖는다. 극대 아이디얼의 존재는 $\mathrm{ACA}\_0$ 와 동치다.

목록의 공통점은 무한히 많은 선택지 가운데 하나를 고르되 고르는 절차가 없다는 것이다.

## 저차 기저 정리

저차 기저 정리(low basis theorem). 무한한 계산가능 이진 나무는 차수가 낮은 가지를 갖는다. 곧 가지 $f$ 가 있어 $f$ 의 [Turing 도약](turing-degrees.md)이 정지 문제와 같은 차수다.[^2]

이 정리로 $\mathrm{WKL}\_0$ 의 모형을 차수가 낮은 집합만 모아 만든다. 그 모형은 $\mathrm{ACA}\_0$ 의 모형이 아니므로 두 체계가 갈린다.

## 보존성

$\mathrm{WKL}\_0$ 은 $\mathrm{RCA}\_0$ 에 대해 $\Pi^1_1$ 보존적이고, 원시재귀 산술(primitive recursive arithmetic) $\mathrm{PRA}$ 에 대해 $\Pi^0_2$ 보존적이다.[^3] 뒤의 것은 $\mathrm{WKL}\_0$ 에서 증명된 $\Pi^0_2$ 진술이 $\mathrm{PRA}$ 에서도 증명된다는 뜻이다.

$\Pi^1_1$ 보존성은 $\mathrm{RCA}\_0$ 의 가산 모형에 강제법으로 나무의 가지를 더해도 수 부분이 바뀌지 않는다는 것으로 증명된다. $\mathrm{PRA}$ 에 대한 보존성은 여기에 $\mathrm{RCA}\_0$ 가 $\mathrm{I}\Sigma^0_1$ 에 대해, $\mathrm{I}\Sigma^0_1$ 이 $\mathrm{PRA}$ 에 대해 $\Pi^0_2$ 보존적이라는 Parsons 정리(Parsons' theorem)를 이어 얻는다.

# 활용

- Hilbert 프로그램의 부분 실현. $\Pi^0_2$ 진술은 계산의 종료를 주장하는 꼴이므로 유한적 방법으로 다룰 수 있다. 고전 해석학의 상당 부분이 $\mathrm{WKL}\_0$ 에서 전개되고 보존성이 그 결과의 $\Pi^0_2$ 진술을 $\mathrm{PRA}$ 로 옮기므로, [형식주의](formalism-hilbert-program.md)가 요구한 정당화가 그 범위에서 얻어진다.
- 비구성성의 단계. 어떤 정리가 $\mathrm{WKL}\_0$ 과 동치이면 그 증명에는 계산 가능한 가지가 없는 나무에서 가지를 고르는 단계가 필요하다. $\mathrm{ACA}\_0$ 과 동치인 정리는 정지 문제를 계산하는 정도의 집합이 필요하다.
- 계산가능성의 기저 문제(basis problem). 어떤 차수의 집합이 모든 무한 계산가능 이진 나무의 가지를 담는가를 묻는 문제가 저차 기저 정리 계열이고, 이 물음이 Turing 차수의 구조 연구로 이어진다.

[^1]: S. G. Simpson, *Subsystems of Second Order Arithmetic*, 2판 (2009), IV 장. 동치 목록과 각 증명.

[^2]: C. G. Jockusch, R. I. Soare, *$\Pi^0_1$ classes and degrees of theories*, Trans. Amer. Math. Soc. **173** (1972), 33–56.

[^3]: L. Harrington 의 미출판 논증. 서술은 Simpson 의 위 책 IX.2.

# 연관 문서

## 선수지식

- [역수학](reverse-mathematics.md)

## 더 알아보기

- [Π⁰₁ 부류](pi01-classes.md)

#logic #computation #foundations
